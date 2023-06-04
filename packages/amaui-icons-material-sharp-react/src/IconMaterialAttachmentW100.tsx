import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachmentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachmentW100'

      short_name='Attachment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.9h11.35v-.7H7q-1.725 0-2.938-1.238Q2.85 13.725 2.85 12q0-1.75 1.225-2.975T7.05 7.8h11.3q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025t-2.025.825H8.2q-.625 0-1.062-.438Q6.7 12.625 6.7 12q0-.65.438-1.075.437-.425 1.062-.425h10.15v-.7H8.2q-.925 0-1.562.638Q6 11.075 6 12t.638 1.562q.637.638 1.562.638h10.15q1.475 0 2.513-1.038Q21.9 12.125 21.9 10.65t-1.037-2.513Q19.825 7.1 18.35 7.1H7.05q-2.025 0-3.462 1.437Q2.15 9.975 2.15 12q0 2.025 1.412 3.462Q4.975 16.9 7 16.9Z"/>
    </Icon>
  );
});

IconMaterialAttachmentW100.displayName = 'AmauiIconMaterialAttachmentW100';

export default IconMaterialAttachmentW100;
