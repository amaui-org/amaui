import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3dRotation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dRotation'

      short_name='3dRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 2.45q.725-.25 1.462-.35Q11.25 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12h-2q0-2.875-1.812-5.075-1.813-2.2-4.638-2.775L15 5.6 13.6 7Zm5.9 19.1q-.725.25-1.462.35-.738.1-1.488.1-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12h2q0 2.875 1.812 5.075 1.813 2.2 4.638 2.775L9 18.4l1.4-1.4ZM12.5 15V9h3q.425 0 .712.287.288.288.288.713v4q0 .425-.288.712-.287.288-.712.288Zm1.5-1.5h1v-3h-1ZM7.5 15v-1.5H10v-1H8.5v-1H10v-1H7.5V9h4v6Z"/>
    </Icon>
  );
});

IconMaterial3dRotation.displayName = 'AmauiIconMaterial3dRotation';

export default IconMaterial3dRotation;
