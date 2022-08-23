import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlakySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakySharpW100'
      short_name='Flaky'

      {...props}
    >
      <path d="M14.025 16.025 16.525 13.55 17.025 14.05 14.05 17.025 12.2 15.2 12.7 14.7ZM7.35 10.65 8.75 9.225 10.15 10.65 10.65 10.15 9.225 8.75 10.65 7.35 10.15 6.85 8.75 8.275 7.35 6.85 6.85 7.35 8.275 8.75 6.85 10.15ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 10.35 19.375 8.9Q18.75 7.45 17.65 6.35L6.35 17.65Q7.45 18.75 8.9 19.375Q10.35 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialFlakySharpW100.displayName = 'AmauiIconMaterialFlakySharpW100';

export default IconMaterialFlakySharpW100;
