import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOffSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffSelect'

      short_name='HdrOffSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.4 10.6-1.55-1.55q.05-.275.1-.525T16 8q0-1.65-1.175-2.825Q13.65 4 12 4q-.275 0-.525.037-.25.038-.475.113l-1.6-1.6q.65-.3 1.3-.425T12 2q2.5 0 4.25 1.75T18 8q0 .65-.15 1.3t-.45 1.3Zm-1.15 4.45L14.6 13.4q-.575.3-1.262.45Q12.65 14 12 14q-2.5 0-4.25-1.75T6 8q0-.725.15-1.375T6.6 5.4L4.95 3.75l1.4-1.4 11.3 11.3Zm-3.2-3.2-4.9-4.9q-.075.2-.112.487Q8 7.725 8 8q0 1.65 1.175 2.825Q10.35 12 12 12q.275 0 .562-.038.288-.037.488-.112ZM20.5 22v-2h-2v-1.5h2v-2H22v2h2V20h-2v2ZM13 22v-6h5v3.9h-.9L18 22h-1.5l-.9-2h-1.1v2Zm1.5-3.5h2v-1h-2ZM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22Zm6.5 0v-6H10q.6 0 1.05.45.45.45.45 1.05v3q0 .6-.45 1.05Q10.6 22 10 22ZM8 20.5h2v-3H8Z"/>
    </Icon>
  );
});

IconMaterialHdrOffSelect.displayName = 'AmauiIconMaterialHdrOffSelect';

export default IconMaterialHdrOffSelect;
