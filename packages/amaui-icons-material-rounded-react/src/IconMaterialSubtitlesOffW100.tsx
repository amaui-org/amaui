import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffW100'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.1 11.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7.3 0-.7-.7h3.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4.35 8.2-1.3-1.3H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h.25l.7.7H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18h11.95L14 15.25H7.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.2L3.15 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.6 15.6q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm1.75-2.1-.5-.5V6.8q0-.35-.225-.575Q19.55 6 19.2 6H8.6l-.7-.7h11.3q.65 0 1.075.425.425.425.425 1.075v10.4q0 .2-.037.375-.038.175-.163.325Zm-6.2-6.2Zm-3.55.3Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffW100.displayName = 'AmauiIconMaterialSubtitlesOffW100';

export default IconMaterialSubtitlesOffW100;
