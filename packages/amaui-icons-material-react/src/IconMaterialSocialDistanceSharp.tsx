import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSocialDistanceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialDistanceSharp'
      short_name='SocialDistance'

      {...props}
    >
      <path d="M6 7Q5.175 7 4.588 6.412Q4 5.825 4 5Q4 4.175 4.588 3.587Q5.175 3 6 3Q6.825 3 7.412 3.587Q8 4.175 8 5Q8 5.825 7.412 6.412Q6.825 7 6 7ZM2 11V10.425Q2 9.825 2.325 9.325Q2.65 8.825 3.225 8.575Q3.875 8.3 4.562 8.15Q5.25 8 6 8Q6.75 8 7.438 8.15Q8.125 8.3 8.775 8.575Q9.35 8.825 9.675 9.325Q10 9.825 10 10.425V11ZM18 7Q17.175 7 16.587 6.412Q16 5.825 16 5Q16 4.175 16.587 3.587Q17.175 3 18 3Q18.825 3 19.413 3.587Q20 4.175 20 5Q20 5.825 19.413 6.412Q18.825 7 18 7ZM14 11V10.425Q14 9.825 14.325 9.325Q14.65 8.825 15.225 8.575Q15.875 8.3 16.562 8.15Q17.25 8 18 8Q18.75 8 19.438 8.15Q20.125 8.3 20.775 8.575Q21.35 8.825 21.675 9.325Q22 9.825 22 10.425V11ZM6 21 2 17 6 13 7.4 14.4 5.8 16H18.2L16.6 14.4L18 13L22 17L18 21L16.6 19.6L18.2 18H5.8L7.4 19.6Z"/>
    </Icon>
  );
});

IconMaterialSocialDistanceSharp.displayName = 'AmauiIconMaterialSocialDistanceSharp';

export default IconMaterialSocialDistanceSharp;
