import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBiotechSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechSharp'
      short_name='Biotech'

      {...props}
    >
      <path d="M5 21V19H10V17Q7.925 17 6.463 15.537Q5 14.075 5 12Q5 10.475 5.838 9.225Q6.675 7.975 8.1 7.4Q8.3 6.55 8.988 6.025Q9.675 5.5 10.55 5.5L10 3.95L10.95 3.6L10.6 2.7L12.5 2L12.8 2.95L13.75 2.6L16.5 10.1L15.55 10.45L15.9 11.4L14 12.1L13.7 11.15L12.75 11.5L12.15 9.85Q11.775 10.2 11.288 10.375Q10.8 10.55 10.3 10.5Q9.75 10.45 9.275 10.162Q8.8 9.875 8.45 9.45Q7.775 9.85 7.388 10.525Q7 11.2 7 12Q7 13.25 7.875 14.125Q8.75 15 10 15H18V17H13V19H19V21ZM13.65 9.55 14.55 9.2 12.85 4.5 11.9 4.85ZM10.5 9Q10.925 9 11.213 8.712Q11.5 8.425 11.5 8Q11.5 7.575 11.213 7.287Q10.925 7 10.5 7Q10.075 7 9.788 7.287Q9.5 7.575 9.5 8Q9.5 8.425 9.788 8.712Q10.075 9 10.5 9ZM13.65 9.55ZM10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8ZM10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Q10.5 8 10.5 8Z"/>
    </Icon>
  );
});

IconMaterialBiotechSharp.displayName = 'AmauiIconMaterialBiotechSharp';

export default IconMaterialBiotechSharp;
