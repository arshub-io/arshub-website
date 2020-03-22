from selenium import webdriver
import os
import time

os.mkdir('screenshots')

SIZES = [[320,1024],[600,1024],[960,1024],[1280,1400],[1980,1400]]
PATHS = ['/', '/services', '/about', '/posts']
BROWSERS = ['Chrome', 'Firefox', 'Safari']

for browser in BROWSERS:
	driver = getattr(webdriver, browser)()
	for size in SIZES:
		driver.set_window_size(size[0], size[1])
		for path in PATHS:
			driver.get("http://localhost:1313"+path)
			time.sleep(0.5)
			driver.save_screenshot('screenshots/'+browser+'_'+str(size[0])+'x'+str(size[1])+'_'+path.replace('/', '_')+'.png')
