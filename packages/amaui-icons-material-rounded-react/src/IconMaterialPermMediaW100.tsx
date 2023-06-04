import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermMediaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaW100'

      short_name='PermMedia'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 16.75q-.65 0-1.075-.425-.425-.425-.425-1.075v-8.7q0-.65.425-1.075Q6.5 5.05 7.15 5.05h4.275q.3 0 .588.125.287.125.487.325l.85.85h6.2q.65 0 1.075.425.425.425.425 1.075v7.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55v-7.4q0-.3-.25-.55-.25-.25-.55-.25h-6.475l-1.3-1.3H7.15q-.325 0-.562.237-.238.238-.238.563v8.7q0 .3.25.55.25.25.55.25Zm-2.7 3.4q-.65 0-1.075-.425-.425-.425-.425-1.075V8.7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.25q0 .3.25.55.25.25.55.25H17.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm5.525-5.75h6.7q.275 0 .375-.225.1-.225-.05-.425l-1.775-2.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.138-.188.013-.313.163l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM6.35 16.05V5.75v10.3Z"/>
    </Icon>
  );
});

IconMaterialPermMediaW100.displayName = 'AmauiIconMaterialPermMediaW100';

export default IconMaterialPermMediaW100;
