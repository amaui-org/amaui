import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonochromePhotosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotosW100Filled'

      short_name='MonochromePhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19h7.2q.35 0 .575-.225Q20 18.55 20 18.2V7.8q0-.35-.225-.575Q19.55 7 19.2 7H12v2.8q-1.325 0-2.262.937Q8.8 11.675 8.8 13t.938 2.262q.937.938 2.262.938Zm0-2.8v-.7q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q13.05 10.5 12 10.5v-.7q1.325 0 2.263.937.937.938.937 2.263t-.937 2.262q-.938.938-2.263.938Zm0-.7q-1.05 0-1.775-.725Q9.5 14.05 9.5 13q0-1.05.725-1.775Q10.95 10.5 12 10.5Zm-7.2 4.2q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.5-.35.275-.125.6-.125h3.6q.325 0 .613.112.287.113.487.363L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotosW100Filled.displayName = 'AmauiIconMaterialMonochromePhotosW100Filled';

export default IconMaterialMonochromePhotosW100Filled;
