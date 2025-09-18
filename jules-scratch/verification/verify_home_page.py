from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Log console messages
    page.on("console", lambda msg: print(f"PAGE LOG: {msg.text()}"))

    page.set_viewport_size({"width": 1280, "height": 800})
    try:
        page.goto("http://localhost:8000", wait_until="networkidle", timeout=60000)
    except Exception as e:
        print(f"Error during navigation: {e}")

    # Scroll down to the bottom of the page to trigger animations
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # Wait for a short period to let animations complete
    page.wait_for_timeout(2000) # Increased timeout for safety

    page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
