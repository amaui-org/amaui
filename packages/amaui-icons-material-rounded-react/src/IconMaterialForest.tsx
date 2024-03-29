import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forest'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18H1.825q-.6 0-.875-.525T1 16.45L3.85 12q-.6 0-.85-.538-.25-.537.1-1.037l5.075-7.25q.3-.425.825-.425.525 0 .825.425L12 6.3l2.175-3.125q.3-.425.825-.425.525 0 .825.425l5.075 7.25q.35.5.1 1.037-.25.538-.85.538L23 16.45q.325.5.05 1.025-.275.525-.875.525H17v2q0 .825-.587 1.413Q15.825 22 15 22q-.825 0-1.412-.587Q13 20.825 13 20v-2h-2v2q0 .825-.587 1.413Q9.825 22 9 22q-.825 0-1.412-.587Q7 20.825 7 20Zm9.725-2h3.625l-3.875-6h1.675L15 5.5l-1.775 2.525 1.675 2.4q.35.5.1 1.037-.25.538-.85.538ZM3.65 16h10.7l-3.875-6h1.675L9 5.5 5.85 10h1.675Zm0 0h3.875H5.85h6.3-1.675 3.875Zm13.075 0H14.15 15 13.225h4.925-1.675 3.875ZM13 18h4-4Zm3.175 0Z"/>
    </Icon>
  );
});

IconMaterialForest.displayName = 'AmauiIconMaterialForest';

export default IconMaterialForest;
