class Youtube {
  constructor(httpClient) {
    this.key = httpClient.params.key;
    this.baseURL = httpClient.baseURL;
    this.getRequestOptions = {
      method : 'GET',
      redirect: 'follow',
    }
  }

  async mostPopular() {
    const response = await fetch(
      `${this.baseURL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `${this.baseURL}/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }

}

export default Youtube;