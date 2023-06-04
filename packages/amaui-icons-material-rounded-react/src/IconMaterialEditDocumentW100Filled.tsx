import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditDocumentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentW100Filled'

      short_name='EditDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588v2.55l-7.65 7.625v2.55Zm6.625-.025q-.15 0-.262-.113-.113-.112-.113-.262v-.325q0-.15.05-.275.05-.125.175-.25l4.125-4.1 1 1-4.125 4.1q-.125.125-.25.175-.125.05-.275.05Zm5.45-4.825-.975-1 .8-.8q.225-.225.525-.238.3-.012.5.188t.188.512q-.013.313-.238.538ZM15.05 7.7H18L14.3 4v2.95q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentW100Filled.displayName = 'AmauiIconMaterialEditDocumentW100Filled';

export default IconMaterialEditDocumentW100Filled;
