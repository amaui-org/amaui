import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPage'

      short_name='ContactPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm-4 4h8v-.575q0-.6-.325-1.1-.325-.5-.9-.75-.65-.275-1.337-.425Q12.75 15 12 15t-1.438.15q-.687.15-1.337.425-.575.25-.9.75-.325.5-.325 1.1Zm-4 4V2h10l6 6v14Zm2-2h12V8.85L13.15 4H6Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialContactPage.displayName = 'AmauiIconMaterialContactPage';

export default IconMaterialContactPage;
