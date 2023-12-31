import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDictionaryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DictionaryFilled'

      short_name='Dictionary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-391h45l23-66h104l24 66h44l-97-258h-46l-97 258Zm81-103 38-107h2l38 107h-78Zm279 216q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-53 0-111 20T40-158v-580q44-30 103.5-46T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q57 0 116.5 16T920-738v580q-50-42-108.5-62T700-240q-60 0-116 21t-104 59Zm80-404v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Z"/>
    </Icon>
  );
});

IconMaterialDictionaryFilled.displayName = 'AmauiIconMaterialDictionaryFilled';

export default IconMaterialDictionaryFilled;
