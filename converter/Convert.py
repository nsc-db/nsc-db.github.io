import subprocess
import os

subprocess.call("test.sh", shell=True)
for filename in os.listdir('files'):
	sourceEncoding = "ascii"
	targetEncoding = "utf-8"
	source = open(filename)
	target = open(filename + ".json", "w")
	target.write(unicode(source.read(), sourceEncoding).encode(targetEncoding))