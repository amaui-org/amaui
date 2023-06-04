import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachmentW100Filled'

      short_name='Attachment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.9q-2.025 0-3.438-1.438Q2.15 14.025 2.15 12q0-2.025 1.438-3.463Q5.025 7.1 7.05 7.1h11.3q1.475 0 2.513 1.037Q21.9 9.175 21.9 10.65q0 1.475-1.037 2.512Q19.825 14.2 18.35 14.2H8.2q-.925 0-1.562-.638Q6 12.925 6 12t.638-1.562Q7.275 9.8 8.2 9.8H18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.2q-.625 0-1.062.425Q6.7 11.35 6.7 12q0 .625.438 1.062.437.438 1.062.438h10.15q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T18.35 7.8H7.05q-1.75 0-2.975 1.225T2.85 12q0 1.725 1.212 2.962Q5.275 16.2 7 16.2h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAttachmentW100Filled.displayName = 'AmauiIconMaterialAttachmentW100Filled';

export default IconMaterialAttachmentW100Filled;
