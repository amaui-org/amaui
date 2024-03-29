import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExploreOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffFilled'

      short_name='ExploreOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.525 21.9q-.3.3-.725.3t-.7-.3l-1.575-1.55q-1.225.8-2.625 1.225-1.4.425-2.875.425-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.138-3.175-.787-1.825-.787-3.9 0-1.475.425-2.875T3.675 6.5L2.1 4.925q-.3-.3-.288-.713.013-.412.313-.712.275-.275.7-.275.425 0 .725.275l16.975 17q.3.3.287.712-.012.413-.287.688Zm-.15-4.4-5.45-5.45 2.15-4.6q.125-.25-.063-.438-.187-.187-.437-.062l-4.6 2.15-5.45-5.45q1.225-.8 2.612-1.225Q10.525 2 12.025 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.138 3.175.787 1.825.787 3.9 0 1.5-.425 2.887-.425 1.388-1.225 2.613ZM7.45 17.075l4.625-2.175-3-3-2.125 4.675q-.125.25.063.437.187.188.437.063Z"/>
    </Icon>
  );
});

IconMaterialExploreOffFilled.displayName = 'AmauiIconMaterialExploreOffFilled';

export default IconMaterialExploreOffFilled;
