import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUpFilled'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 11.7q-.275-.275-.275-.7 0-.425.275-.7l4.6-4.6q.15-.15.325-.212.175-.063.375-.063t.375.063q.175.062.325.212l4.6 4.6q.275.275.287.687.013.413-.287.713-.275.275-.7.275-.425 0-.7-.275L12 7.825 8.1 11.7q-.275.275-.688.288Q7 12 6.7 11.7Zm0 6q-.275-.275-.275-.7 0-.425.275-.7l4.6-4.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l4.6 4.6q.275.275.287.687.013.413-.287.713-.275.275-.7.275-.425 0-.7-.275L12 13.825 8.1 17.7q-.275.275-.688.288Q7 18 6.7 17.7Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUpFilled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowUpFilled';

export default IconMaterialKeyboardDoubleArrowUpFilled;
