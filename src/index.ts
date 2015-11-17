
export class TestPage {
  open() {
    browser.get("http://localhost:3002/")
    expect(true).toBe(true)
  }
}
