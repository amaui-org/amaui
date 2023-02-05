
# AmauiZip

## Options

Name | Type | Default | Description
-----|------|---------|------------
encode_values | <span class='amaui\_boolean'>boolean</span> | true | If huffman values ought to be encoded
huffman_code | 'auto' or <span class='amaui\_boolean'>boolean</span> | 'auto' | If huffman code optimization should be used, with auto it's used only if it compresses the data more, after lz77 is used

## Arguments

Name | Type | Default | Description
-----|------|---------|------------
value | <span class='amaui\_string'>string</span>, <span class='amaui\_other'>Uint8Array</span>, <span class='amaui\_other'>Buffer</span> | | Value to zip
options | [Options](#options) | | Option values


## Encode, decode

Name | Type | Description
-----|------|------------
return | [AmauiZipResponse](/dev/zip/api/AmauiZipResponse) | Encode, decode return value

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Zip: Use",
      "to": "/dev/zip/use"
    },
    "next": {
      "label": "Zip API: AmauiZipResponse",
      "to": "/dev/zip/api/AmauiZipResponse"
    }
  }
}~
