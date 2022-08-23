import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatasetLinkedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinkedSharp'
      short_name='DatasetLinked'

      {...props}
    >
      <path d="M3 20V2H21V11.075Q20.75 11.025 20.513 11.012Q20.275 11 20 11H19V4H5V18H8.075Q8.175 18.55 8.35 19.05Q8.525 19.55 8.8 20ZM5 17Q5 17 5 17Q5 17 5 17Q5 17.275 5 17.512Q5 17.75 5 18V4V17ZM7 16H8.075Q8.275 14.775 8.963 13.738Q9.65 12.7 10.7 12H7ZM7 10H11V6H7ZM14 21Q12.35 21 11.175 19.825Q10 18.65 10 17Q10 15.35 11.175 14.175Q12.35 13 14 13H16V15H14Q13.175 15 12.588 15.588Q12 16.175 12 17Q12 17.825 12.588 18.413Q13.175 19 14 19H16V21ZM13 10H17V6H13ZM14 18V16H20V18ZM18 21V19H20Q20.825 19 21.413 18.413Q22 17.825 22 17Q22 16.175 21.413 15.588Q20.825 15 20 15H18V13H20Q21.65 13 22.825 14.162Q24 15.325 24 17Q24 18.65 22.825 19.825Q21.65 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinkedSharp.displayName = 'AmauiIconMaterialDatasetLinkedSharp';

export default IconMaterialDatasetLinkedSharp;
