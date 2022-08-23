import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWifiMistralTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiMistralTwoTone'
      short_name='NestWifiMistral'

      {...props}
    >
      <path d="M9 21Q6.5 21 4.75 19.25Q3 17.5 3 15V9Q3 6.5 4.75 4.75Q6.5 3 9 3H15Q17.5 3 19.25 4.75Q21 6.5 21 9V15Q21 17.5 19.25 19.25Q17.5 21 15 21ZM5 15H19V9Q19 7.35 17.825 6.175Q16.65 5 15 5H9Q7.35 5 6.175 6.175Q5 7.35 5 9ZM5.55 17Q6.075 17.9 6.975 18.45Q7.875 19 9 19H15Q16.125 19 17.025 18.45Q17.925 17.9 18.45 17ZM12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Q12 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialNestWifiMistralTwoTone.displayName = 'AmauiIconMaterialNestWifiMistralTwoTone';

export default IconMaterialNestWifiMistralTwoTone;
