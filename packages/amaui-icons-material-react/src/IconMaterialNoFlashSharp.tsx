import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFlashSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashSharp'
      short_name='NoFlash'

      {...props}
    >
      <path d="M20.475 23.3 17.975 20.8V22H2V9.4H6.15L6.35 9.175L0.675 3.5L2.1 2.075L21.9 21.875ZM4 20H16V18.825L13.425 16.25Q13.425 16.25 13.425 16.25Q13.425 16.25 13.425 16.25Q13.15 17.45 12.213 18.225Q11.275 19 10 19Q8.55 19 7.525 17.975Q6.5 16.95 6.5 15.5Q6.5 14.225 7.275 13.287Q8.05 12.35 9.25 12.075Q9.25 12.075 9.25 12.075Q9.25 12.075 9.25 12.075L8.575 11.4H4ZM18 15.125 16 13.125V11.4H14.275L10.875 8H12.575L13.85 9.4H18ZM19 11V7H18V2H22L20.4 5.6H22ZM16 13.125ZM12.3 15.1ZM10 17Q10.625 17 11.062 16.562Q11.5 16.125 11.5 15.5Q11.5 14.875 11.062 14.438Q10.625 14 10 14Q9.375 14 8.938 14.438Q8.5 14.875 8.5 15.5Q8.5 16.125 8.938 16.562Q9.375 17 10 17Z"/>
    </Icon>
  );
});

IconMaterialNoFlashSharp.displayName = 'AmauiIconMaterialNoFlashSharp';

export default IconMaterialNoFlashSharp;
