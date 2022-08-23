import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioRoundedW100Filled'
      short_name='Radio'

      {...props}
    >
      <path d="M4.8 20.7Q4.175 20.7 3.737 20.262Q3.3 19.825 3.3 19.2V8.8Q3.3 8.1 3.763 7.562Q4.225 7.025 4.875 6.75L14.275 2.925Q14.4 2.875 14.538 2.938Q14.675 3 14.725 3.125Q14.775 3.25 14.713 3.387Q14.65 3.525 14.525 3.575L5.35 7.3H19.2Q19.825 7.3 20.263 7.737Q20.7 8.175 20.7 8.8V19.2Q20.7 19.825 20.263 20.262Q19.825 20.7 19.2 20.7ZM4 11.7H16.65V10.25Q16.65 10.1 16.75 10Q16.85 9.9 17 9.9Q17.15 9.9 17.25 10Q17.35 10.1 17.35 10.25V11.7H20V8.8Q20 8.45 19.775 8.225Q19.55 8 19.2 8H4.8Q4.45 8 4.225 8.225Q4 8.45 4 8.8ZM7.8 18.2Q8.625 18.2 9.213 17.612Q9.8 17.025 9.8 16.2Q9.8 15.375 9.213 14.787Q8.625 14.2 7.8 14.2Q6.975 14.2 6.388 14.787Q5.8 15.375 5.8 16.2Q5.8 17.025 6.388 17.612Q6.975 18.2 7.8 18.2Z"/>
    </Icon>
  );
});

IconMaterialRadioRoundedW100Filled.displayName = 'AmauiIconMaterialRadioRoundedW100Filled';

export default IconMaterialRadioRoundedW100Filled;
