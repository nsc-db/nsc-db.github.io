cd files
rm -rf *save.plist

for file in *
do
	end='.json'

	sed '7!d;q' $file | sed 's/^.\{16\}//g' | sed 's/.\{9\}$//' | python -m json.tool > $file$end
	echo $file

done
rm -rf *.plist

echo "done"
