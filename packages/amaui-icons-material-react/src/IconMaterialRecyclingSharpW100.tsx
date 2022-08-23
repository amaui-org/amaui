import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecyclingSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingSharpW100'
      short_name='Recycling'

      {...props}
    >
      <path d="M9.75 9.85 11.55 6.925 10.35 4.95Q10.125 4.575 9.663 4.575Q9.2 4.575 8.975 4.95L7.025 8.225ZM17.5 15.3 15.725 12.35 18.5 10.75 19.775 12.875Q19.975 13.225 20.013 13.65Q20.05 14.075 19.85 14.425Q19.65 14.825 19.25 15.062Q18.85 15.3 18.4 15.3ZM15.2 20.9 12 17.7 15.2 14.5V16.1H19L17.85 18.425Q17.625 18.825 17.238 19.062Q16.85 19.3 16.4 19.3H15.2ZM7.45 19.3Q7.075 19.3 6.738 19.1Q6.4 18.9 6.25 18.55Q6.1 18.225 6.1 17.875Q6.1 17.525 6.275 17.225L6.95 16.1H10.4V19.3ZM5.475 17.025 4.175 14.425Q3.975 14.075 4 13.65Q4.025 13.225 4.25 12.875L4.55 12.35L3.2 11.525L7.575 10.425L8.675 14.825L7.3 13.975ZM16.275 10.175 11.9 9.075 13.275 8.25 10.775 4.1H13.6Q14.025 4.1 14.387 4.312Q14.75 4.525 14.975 4.875L16.025 6.625L17.375 5.775Z"/>
    </Icon>
  );
});

IconMaterialRecyclingSharpW100.displayName = 'AmauiIconMaterialRecyclingSharpW100';

export default IconMaterialRecyclingSharpW100;
