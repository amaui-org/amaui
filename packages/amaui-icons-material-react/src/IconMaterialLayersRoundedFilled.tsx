import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersRoundedFilled'
      short_name='Layers'

      {...props}
    >
      <path d="M12 20.525Q11.675 20.525 11.363 20.413Q11.05 20.3 10.775 20.1L4.025 14.85Q3.625 14.55 3.638 14.062Q3.65 13.575 4.05 13.275Q4.325 13.075 4.65 13.075Q4.975 13.075 5.25 13.275L12 18.5Q12 18.5 12 18.5Q12 18.5 12 18.5L18.75 13.275Q19.025 13.075 19.35 13.075Q19.675 13.075 19.95 13.275Q20.35 13.575 20.363 14.062Q20.375 14.55 19.975 14.85L13.225 20.1Q12.95 20.3 12.638 20.413Q12.325 20.525 12 20.525ZM12 15.475Q11.675 15.475 11.363 15.363Q11.05 15.25 10.775 15.05L4.025 9.8Q3.825 9.65 3.725 9.438Q3.625 9.225 3.625 9Q3.625 8.775 3.725 8.562Q3.825 8.35 4.025 8.2L10.775 2.95Q11.05 2.75 11.363 2.637Q11.675 2.525 12 2.525Q12.325 2.525 12.638 2.637Q12.95 2.75 13.225 2.95L19.975 8.2Q20.175 8.35 20.275 8.562Q20.375 8.775 20.375 9Q20.375 9.225 20.275 9.438Q20.175 9.65 19.975 9.8L13.225 15.05Q12.95 15.25 12.638 15.363Q12.325 15.475 12 15.475Z"/>
    </Icon>
  );
});

IconMaterialLayersRoundedFilled.displayName = 'AmauiIconMaterialLayersRoundedFilled';

export default IconMaterialLayersRoundedFilled;
