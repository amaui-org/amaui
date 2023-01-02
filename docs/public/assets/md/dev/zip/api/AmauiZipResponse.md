
# AmauiZipResponse

## Values

Name | Type | Description
-----|------|------------
value | <span class='amaui\_number'>number</span>, <span class='amaui\_other'>Uint8Array</span>, <span class='amaui\_other'>Buffer</span> | Value of the response
original\_byte\_size | <span class='amaui\_number'>number</span> | Original value in bytes
value\_byte\_size | <span class='amaui\_number'>number</span> | Encoded, decoded value (result) in byte size
compression\_ratio | <span class='amaui\_number'>number</span> | Compression ratio over or below 1
compression\_percentage | <span class='amaui\_number'>number</span> | Compression in percentage value
positive | <span class='amaui\_boolean'>boolean</span> | Whether compression was positive or negative. Positive meaning result is smaller in byte size, than the original value.
performance\_milliseconds | <span class='amaui\_number'>number</span> | Time it took to encode, decode in milliseconds
performance | <span class='amaui\_string'>string</span> | Formated time it took to encode, decode

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Zip API: AmauiZip",
      "to": "/dev/zip/api/AmauiZip"
    }
  }
}~
