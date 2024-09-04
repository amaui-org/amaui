import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOffFilled'

      short_name='MailOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-55 686-160H80v-640h80l80 80H126l-71-71 57-57 736 736-57 57Zm89-139L575-499l225-141v-80L526-548 274-800h606v606Z"/>
    </Icon>
  );
});

IconMaterialMailOffFilled.displayName = 'AmauiIconMaterialMailOffFilled';

export default IconMaterialMailOffFilled;
