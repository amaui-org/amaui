import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportContactsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContactsW100Filled'

      short_name='ImportContacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 17.4q1.25-.725 2.525-1.037 1.275-.313 2.625-.313.9 0 1.875.175T21 16.7V6.675q-.65-.4-1.562-.563-.913-.162-1.938-.162-1.35 0-2.7.412-1.35.413-2.45 1.238Zm-.35 1q-1.225-.8-2.625-1.225-1.4-.425-2.875-.425-1.2 0-2.312.3-1.113.3-1.888.725V6.225q.775-.45 1.875-.713 1.1-.262 2.325-.262 1.475 0 2.875.438 1.4.437 2.625 1.262 1.225-.825 2.625-1.262 1.4-.438 2.875-.438 1.225 0 2.312.262 1.088.263 1.888.713v11.55q-.775-.425-1.888-.725-1.112-.3-2.312-.3-1.475 0-2.875.425T12 18.4Z"/>
    </Icon>
  );
});

IconMaterialImportContactsW100Filled.displayName = 'AmauiIconMaterialImportContactsW100Filled';

export default IconMaterialImportContactsW100Filled;
