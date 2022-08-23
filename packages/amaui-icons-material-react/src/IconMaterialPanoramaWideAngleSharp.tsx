import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaWideAngleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleSharp'
      short_name='PanoramaWideAngle'

      {...props}
    >
      <path d="M12 20Q9.725 20 7.463 19.788Q5.2 19.575 3 19Q2.475 17.275 2.237 15.537Q2 13.8 2 12Q2 10.2 2.237 8.462Q2.475 6.725 3 5Q4.975 4.5 7.2 4.25Q9.425 4 12 4Q14.575 4 16.8 4.25Q19.025 4.5 21 5Q21.525 6.725 21.763 8.462Q22 10.2 22 12Q22 13.8 21.75 15.537Q21.5 17.275 21 19Q18.8 19.575 16.538 19.788Q14.275 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 18Q13.875 18 15.725 17.837Q17.575 17.675 19.4 17.25Q19.725 15.95 19.863 14.65Q20 13.35 20 12Q20 10.65 19.863 9.35Q19.725 8.05 19.4 6.75Q17.775 6.375 15.963 6.188Q14.15 6 12 6Q9.875 6 8.062 6.188Q6.25 6.375 4.6 6.75Q4.275 8.05 4.138 9.35Q4 10.65 4 12Q4 13.35 4.138 14.65Q4.275 15.95 4.6 17.25Q6.425 17.675 8.275 17.837Q10.125 18 12 18Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleSharp.displayName = 'AmauiIconMaterialPanoramaWideAngleSharp';

export default IconMaterialPanoramaWideAngleSharp;
