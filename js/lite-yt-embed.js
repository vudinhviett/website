class LiteYTEmbed extends HTMLElement {
    connectedCallback() {
        this.videoId = this.getAttribute('videoid');

        let playBtnEl = this.querySelector('.lty-playbtn');
        // A label for the button takes priority over a [playlabel] attribute on the custom-element
        this.playLabel = (playBtnEl && playBtnEl.textContent.trim()) || this.getAttribute('playlabel') || 'Play';

        if (!this.style.backgroundImage) {
          this.posterUrl = `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
          // Warm the connection for the poster image
          LiteYTEmbed.addPrefetch('preload', this.posterUrl, 'image');

          this.style.backgroundImage = `url("${this.posterUrl}")`;
        }

        // Set up play button, and its visually hidden label
        if (!playBtnEl) {
            playBtnEl = document.createElement('button');
            playBtnEl.type = 'button';
            playBtnEl.classList.add('lty-playbtn');
            this.append(playBtnEl);
        }
        if (!playBtnEl.textContent) {
            const playBtnLabelEl = document.createElement('span');
            playBtnLabelEl.className = 'lyt-visually-hidden';
            playBtnLabelEl.textContent = this.playLabel;
            playBtnEl.append(playBtnLabelEl);
        }
       this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {once: true});
       this.addEventListener('click', e => this.addIframe());
    }

   static addPrefetch(kind, url, as) {
        const linkEl = document.createElement('link');
        linkEl.rel = kind;
        linkEl.href = url;
        if (as) {
            linkEl.as = as;
        }
        document.head.append(linkEl);
    }
   static warmConnections() {
        if (LiteYTEmbed.preconnected) return;

        // The iframe document and most of its subresources come right off youtube.com
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
        LiteYTEmbed.preconnected = true;
    }

    addIframe() {
        const params = new URLSearchParams(this.getAttribute('params') || []);
        params.append('autoplay', '1');

        const iframeEl = document.createElement('iframe');
        iframeEl.width = 560;
        iframeEl.height = 315;
        iframeEl.title = this.playLabel;
        iframeEl.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        iframeEl.allowFullscreen = true;
        iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${params.toString()}`;
        this.append(iframeEl);

        this.classList.add('lyt-activated');

       this.querySelector('iframe').focus();
    }
}
customElements.define('lite-youtube', LiteYTEmbed);
