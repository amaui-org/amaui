import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieFilterRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilterRoundedW100'
      short_name='MovieFilter'

      {...props}
    >
      <path d="M9.5 11.3 8.85 12.7 7.45 13.35 8.85 14 9.5 15.4 10.15 14 11.55 13.35 10.15 12.7ZM15.5 10.8 15 11.85 13.95 12.35 15 12.85 15.5 13.9 16 12.85 17.05 12.35 16 11.85ZM4.8 5.3 6.15 8H9.15L7.8 5.3H9.8L11.15 8H14.15L12.8 5.3H14.8L16.15 8H19.15L17.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7H4.8Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.737Q4.15 5.325 4.8 5.3ZM4 8.7V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V8.7ZM4 8.7V17.2Q4 17.55 4 17.775Q4 18 4 18Q4 18 4 17.775Q4 17.55 4 17.2Z"/>
    </Icon>
  );
});

IconMaterialMovieFilterRoundedW100.displayName = 'AmauiIconMaterialMovieFilterRoundedW100';

export default IconMaterialMovieFilterRoundedW100;
