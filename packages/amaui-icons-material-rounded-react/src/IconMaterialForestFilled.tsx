import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestFilled'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 22q-.825 0-1.412-.587Q13 20.825 13 20v-1h4v1q0 .825-.587 1.413Q15.825 22 15 22Zm-6 0q-.825 0-1.412-.587Q7 20.825 7 20v-2H1.825q-.6 0-.875-.525T1 16.45L3.85 12q-.6 0-.85-.538-.25-.537.1-1.037l5.075-7.25q.3-.425.825-.425.525 0 .825.425l5.075 7.25q.35.5.1 1.037-.25.538-.85.538L17 16.45q.275.425.013.988-.263.562-.838.562H11v2q0 .825-.587 1.413Q9.825 22 9 22Zm8.875-4q.25-.25.337-.837.088-.588-.212-1.063l-2.375-3.725q.375-.35.475-1.088.1-.737-.3-1.312l-3.175-4.55 1.55-2.25q.3-.425.825-.425.525 0 .825.425l5.075 7.25q.35.5.1 1.037-.25.538-.85.538L23 16.45q.325.5.05 1.025-.275.525-.875.525Z"/>
    </Icon>
  );
});

IconMaterialForestFilled.displayName = 'AmauiIconMaterialForestFilled';

export default IconMaterialForestFilled;
