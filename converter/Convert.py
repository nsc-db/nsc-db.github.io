import subprocess
import os

dir="files"

print os.listdir(dir)
subprocess.call("test.sh", shell=false)
for filename in os.chdir("files"):
	with open(filename) as f:
		lines = f.readlines()
    	lines = [l for l in lines if "ROW" in l]
    	with open(filename + ".json", "w") as f1:
       		f1.writelines(linesencode("utf-8"))
