import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureNeg2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg2W100Filled'

      short_name='ExposureNeg2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.8 17.65q-.2 0-.337-.138-.138-.137-.138-.337 0-.15.075-.325.075-.175.175-.3l3.95-4.05q.875-.925 1.287-1.538.413-.612.413-1.362 0-1.125-.75-1.837-.75-.713-2-.713-.8 0-1.425.325t-1.025.9q-.075.125-.2.163-.125.037-.25-.013-.15-.075-.2-.225-.05-.15.05-.275.5-.725 1.225-1.15.725-.425 1.825-.425 1.575 0 2.513.95.937.95.937 2.3 0 .9-.463 1.65-.462.75-1.387 1.7l-3.85 3.95v.05h5.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM3.925 13.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg2W100Filled.displayName = 'AmauiIconMaterialExposureNeg2W100Filled';

export default IconMaterialExposureNeg2W100Filled;
