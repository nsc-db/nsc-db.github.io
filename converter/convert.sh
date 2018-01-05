cd files
rm -rf *save.plist
rm -rf *.json

for file in *
do
	end='.json'

	output=$(sed '7!d;q' $file | sed 's/^.\{16\}//g' | sed 's/.\{9\}$//' | python -m json.tool)
	echo -e $output  > $file$end
	echo $file

done
# rm -rf *.plist

echo "done"
