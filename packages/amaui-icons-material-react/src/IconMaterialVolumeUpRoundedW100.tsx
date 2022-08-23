import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeUpRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpRoundedW100'
      short_name='VolumeUp'

      {...props}
    >
      <path d="M14.6 18.925Q14.425 19 14.263 18.887Q14.1 18.775 14.1 18.575Q14.1 18.475 14.163 18.413Q14.225 18.35 14.3 18.3Q16.25 17.5 17.425 15.787Q18.6 14.075 18.6 11.975Q18.6 9.875 17.425 8.162Q16.25 6.45 14.3 5.65Q14.2 5.6 14.15 5.525Q14.1 5.45 14.1 5.35Q14.1 5.15 14.263 5.05Q14.425 4.95 14.6 5.025Q16.7 5.95 18 7.812Q19.3 9.675 19.3 11.975Q19.3 14.275 18 16.137Q16.7 18 14.6 18.925ZM5.45 13.7Q5.125 13.7 4.912 13.487Q4.7 13.275 4.7 12.95V11.05Q4.7 10.725 4.912 10.512Q5.125 10.3 5.45 10.3H7.95L9.825 8.425Q10.175 8.075 10.638 8.262Q11.1 8.45 11.1 8.95V15.05Q11.1 15.55 10.638 15.737Q10.175 15.925 9.825 15.575L7.95 13.7ZM14.1 15.1V8.85Q14.825 9.375 15.213 10.212Q15.6 11.05 15.6 12Q15.6 12.95 15.213 13.762Q14.825 14.575 14.1 15.1ZM10.4 8.85 8.25 11H5.4V13H8.25L10.4 15.15ZM7.9 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpRoundedW100.displayName = 'AmauiIconMaterialVolumeUpRoundedW100';

export default IconMaterialVolumeUpRoundedW100;
