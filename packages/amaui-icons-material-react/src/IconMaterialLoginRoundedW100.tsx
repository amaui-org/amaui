import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginRoundedW100'
      short_name='Login'

      {...props}
    >
      <path d="M11.35 15.5Q11.225 15.375 11.225 15.25Q11.225 15.125 11.35 15L13.35 13H4.9Q4.75 13 4.65 12.9Q4.55 12.8 4.55 12.65Q4.55 12.5 4.65 12.4Q4.75 12.3 4.9 12.3H13.35L11.325 10.275Q11.225 10.175 11.225 10.05Q11.225 9.925 11.35 9.8Q11.475 9.675 11.6 9.675Q11.725 9.675 11.85 9.8L14.175 12.125Q14.3 12.25 14.35 12.375Q14.4 12.5 14.4 12.65Q14.4 12.8 14.35 12.925Q14.3 13.05 14.175 13.175L11.825 15.525Q11.725 15.625 11.6 15.625Q11.475 15.625 11.35 15.5ZM12.05 21Q11.9 21 11.8 20.9Q11.7 20.8 11.7 20.65Q11.7 20.5 11.8 20.4Q11.9 20.3 12.05 20.3H17.95Q18.25 20.3 18.5 20.05Q18.75 19.8 18.75 19.5V5.8Q18.75 5.5 18.5 5.25Q18.25 5 17.95 5H12.05Q11.9 5 11.8 4.9Q11.7 4.8 11.7 4.65Q11.7 4.5 11.8 4.4Q11.9 4.3 12.05 4.3H17.95Q18.6 4.3 19.025 4.725Q19.45 5.15 19.45 5.8V19.5Q19.45 20.15 19.025 20.575Q18.6 21 17.95 21Z"/>
    </Icon>
  );
});

IconMaterialLoginRoundedW100.displayName = 'AmauiIconMaterialLoginRoundedW100';

export default IconMaterialLoginRoundedW100;
