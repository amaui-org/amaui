import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownPasteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownPasteW100'

      short_name='MarkdownPaste'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-172v-282h304v282h-28v-254H690v174h-28v-174H552v254h-28Zm-352 0v-616h251q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h251v234h-28v-206H628v80H332v-80H200v560h224v28H172Zm308.175-576q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialMarkdownPasteW100.displayName = 'AmauiIconMaterialMarkdownPasteW100';

export default IconMaterialMarkdownPasteW100;
