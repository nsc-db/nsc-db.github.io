cd files
rm -rf *save.plist
rm -rf *.json

for file in *
do
    end='.json'
    
    #| iconv -f EUC-JP -t UTF-8 possible lastz
    sed '7!d;q' $file | sed 's/^.\{16\}//g' | sed 's/.\{9\}$//' | python -m json.tool > $file$end
    echo $file

done
# rm -rf *.plist

echo "done"
