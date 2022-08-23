import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlockSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlockSharpW100Filled'
      short_name='Block'

      {...props}
    >
      <path d="M4 12Q4 13.5 4.537 14.887Q5.075 16.275 6.1 17.4L17.4 6.1Q16.3 5.05 14.9 4.525Q13.5 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12ZM6.6 17.9Q7.725 18.925 9.113 19.462Q10.5 20 12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 10.5 19.45 9.112Q18.9 7.725 17.9 6.6ZM3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Z"/>
    </Icon>
  );
});

IconMaterialBlockSharpW100Filled.displayName = 'AmauiIconMaterialBlockSharpW100Filled';

export default IconMaterialBlockSharpW100Filled;
