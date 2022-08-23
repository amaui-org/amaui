import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrStrongSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrStrongSharpW100'
      short_name='HdrStrong'

      {...props}
    >
      <path d="M16.2 16.7Q14.25 16.7 12.875 15.325Q11.5 13.95 11.5 12Q11.5 10.05 12.875 8.675Q14.25 7.3 16.2 7.3Q18.15 7.3 19.525 8.675Q20.9 10.05 20.9 12Q20.9 13.95 19.525 15.325Q18.15 16.7 16.2 16.7ZM5.8 14.7Q4.675 14.7 3.888 13.912Q3.1 13.125 3.1 12Q3.1 10.875 3.888 10.087Q4.675 9.3 5.8 9.3Q6.925 9.3 7.713 10.087Q8.5 10.875 8.5 12Q8.5 13.125 7.713 13.912Q6.925 14.7 5.8 14.7ZM5.8 14Q6.625 14 7.213 13.412Q7.8 12.825 7.8 12Q7.8 11.175 7.213 10.587Q6.625 10 5.8 10Q4.975 10 4.388 10.587Q3.8 11.175 3.8 12Q3.8 12.825 4.388 13.412Q4.975 14 5.8 14Z"/>
    </Icon>
  );
});

IconMaterialHdrStrongSharpW100.displayName = 'AmauiIconMaterialHdrStrongSharpW100';

export default IconMaterialHdrStrongSharpW100;
