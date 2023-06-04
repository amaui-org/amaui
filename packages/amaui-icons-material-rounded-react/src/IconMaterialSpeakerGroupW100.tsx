import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroupW100'

      short_name='SpeakerGroup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 18.3h8.7q.35 0 .575-.225Q19 17.85 19 17.5V3.8q0-.35-.225-.575Q18.55 3 18.2 3H9.5q-.35 0-.575.225Q8.7 3.45 8.7 3.8v13.7q0 .35.225.575.225.225.575.225Zm0 .7q-.65 0-1.075-.425Q8 18.15 8 17.5V3.8q0-.65.425-1.075Q8.85 2.3 9.5 2.3h8.7q.65 0 1.075.425.425.425.425 1.075v13.7q0 .65-.425 1.075Q18.85 19 18.2 19Zm4.35-11.75q.525 0 .888-.363.362-.362.362-.887t-.362-.888q-.363-.362-.888-.362t-.887.362Q12.6 5.475 12.6 6t.363.887q.362.363.887.363Zm0 8.85q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T13.85 10.4q-1.2 0-2.025.825T11 13.25q0 1.2.825 2.025t2.025.825Zm0-.7q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.512q.637-.638 1.512-.638t1.513.638q.637.637.637 1.512t-.637 1.512q-.638.638-1.513.638ZM6.8 21.7q-.65 0-1.075-.425Q5.3 20.85 5.3 20.2V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V20.2q0 .35.225.575Q6.45 21 6.8 21h7.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8.7 3V18.3 3Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroupW100.displayName = 'AmauiIconMaterialSpeakerGroupW100';

export default IconMaterialSpeakerGroupW100;
