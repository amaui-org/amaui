import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownRoundedW100Filled'
      short_name='ThumbDown'

      {...props}
    >
      <path d="M20.325 14.175Q19.425 14.175 18.788 13.537Q18.15 12.9 18.15 12.025V6.475Q18.15 5.575 18.788 4.937Q19.425 4.3 20.325 4.3Q21.225 4.3 21.863 4.937Q22.5 5.575 22.5 6.45V12Q22.5 12.9 21.863 13.537Q21.225 14.175 20.325 14.175ZM10.075 20.175Q9.9 20.35 9.675 20.4Q9.45 20.45 9.25 20.3Q9.1 20.175 9.075 20Q9.05 19.825 9.1 19.625L10.1 14.7H3Q2.425 14.7 1.963 14.237Q1.5 13.775 1.5 13.2V12.2Q1.5 12.075 1.525 11.925Q1.55 11.775 1.6 11.65L4.275 5.35Q4.5 4.85 4.888 4.575Q5.275 4.3 5.725 4.3H14.15Q14.775 4.3 15.213 4.737Q15.65 5.175 15.65 5.8V14.075Q15.65 14.375 15.538 14.65Q15.425 14.925 15.2 15.15Z"/>
    </Icon>
  );
});

IconMaterialThumbDownRoundedW100Filled.displayName = 'AmauiIconMaterialThumbDownRoundedW100Filled';

export default IconMaterialThumbDownRoundedW100Filled;
