import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCopyAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllW100'

      short_name='CopyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 17.35q-.65 0-1.075-.425-.425-.425-.425-1.075V4.15q0-.65.425-1.075Q8.5 2.65 9.15 2.65h8.7q.65 0 1.075.425.425.425.425 1.075v11.7q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h8.7q.3 0 .55-.25.25-.25.25-.55V4.15q0-.3-.25-.55-.25-.25-.55-.25h-8.7q-.3 0-.55.25-.25.25-.25.55v11.7q0 .3.25.55.25.25.55.25Zm-5.5-2h.7v-2h-.7Zm0-4h.7v-2h-.7Zm6.7 10.7h2v-.7h-2Zm-6.7-2.7h.7v-2h-.7Zm.7 2.7v-.7h-.7q0 .3.2.5t.5.2Zm2 0h2v-.7h-2Zm8 0q.3 0 .5-.2t.2-.5h-.7ZM3.65 6.65h.7v-.7q-.3 0-.5.2t-.2.5Z"/>
    </Icon>
  );
});

IconMaterialCopyAllW100.displayName = 'AmauiIconMaterialCopyAllW100';

export default IconMaterialCopyAllW100;
