import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadingFilled'

      short_name='Downloading'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.975 21.95q-1.9-.2-3.537-1.063Q5.8 20.025 4.6 18.688q-1.2-1.338-1.887-3.063-.688-1.725-.688-3.65 0-3.875 2.563-6.713Q7.15 2.425 11 2v2q-3.025.425-5 2.687-1.975 2.263-1.975 5.288Q4.025 15 6 17.262q1.975 2.263 4.975 2.688Zm1-4.95L6.95 11.95l1.425-1.425 2.6 2.6V7h2v6.125l2.575-2.575L16.975 12Zm1 4.95v-2q1.075-.15 2.063-.575.987-.425 1.837-1.075l1.45 1.45q-1.175.925-2.525 1.488-1.35.562-2.825.712Zm3.95-16.3Q16.05 5 15.062 4.575 14.075 4.15 13 4V2q1.475.15 2.825.712 1.35.563 2.5 1.488Zm2.8 12.65-1.4-1.425q.65-.85 1.05-1.838.4-.987.55-2.062h2.05q-.2 1.475-.75 2.837-.55 1.363-1.5 2.488Zm.2-7.325q-.15-1.075-.55-2.063-.4-.987-1.05-1.837l1.4-1.425q.95 1.125 1.525 2.487.575 1.363.725 2.838Z"/>
    </Icon>
  );
});

IconMaterialDownloadingFilled.displayName = 'AmauiIconMaterialDownloadingFilled';

export default IconMaterialDownloadingFilled;
