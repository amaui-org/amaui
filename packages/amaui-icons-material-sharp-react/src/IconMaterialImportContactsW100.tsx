import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportContactsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContactsW100'

      short_name='ImportContacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 16.05q1.35 0 2.625.313 1.275.312 2.525 1.037V7.6q-1.1-.825-2.45-1.238-1.35-.412-2.7-.412-1.025 0-1.938.162-.912.163-1.562.563V16.7q.65-.3 1.625-.475T6.5 16.05Zm5.85 1.35q1.25-.725 2.525-1.037 1.275-.313 2.625-.313.9 0 1.875.175T21 16.7V6.675q-.65-.4-1.562-.563-.913-.162-1.938-.162-1.35 0-2.7.412-1.35.413-2.45 1.238Zm-.35 1q-1.225-.8-2.625-1.225-1.4-.425-2.875-.425-1.2 0-2.312.3-1.113.3-1.888.725V6.225q.775-.45 1.875-.713 1.1-.262 2.325-.262 1.475 0 2.875.438 1.4.437 2.625 1.262 1.225-.825 2.625-1.262 1.4-.438 2.875-.438 1.225 0 2.312.262 1.088.263 1.888.713v11.55q-.775-.425-1.888-.725-1.112-.3-2.312-.3-1.475 0-2.875.425T12 18.4Zm-4.675-6.725Z"/>
    </Icon>
  );
});

IconMaterialImportContactsW100.displayName = 'AmauiIconMaterialImportContactsW100';

export default IconMaterialImportContactsW100;
