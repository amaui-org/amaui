import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentDissatisfied = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentDissatisfied'

      short_name='SentimentDissatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 11q.65 0 1.075-.425Q17 10.15 17 9.5q0-.65-.425-1.075Q16.15 8 15.5 8q-.65 0-1.075.425Q14 8.85 14 9.5q0 .65.425 1.075Q14.85 11 15.5 11Zm-7 0q.65 0 1.075-.425Q10 10.15 10 9.5q0-.65-.425-1.075Q9.15 8 8.5 8q-.65 0-1.075.425Q7 8.85 7 9.5q0 .65.425 1.075Q7.85 11 8.5 11ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm-3.875-3q.175 0 .363-.1.187-.1.287-.25.55-.75 1.375-1.2Q10.975 15 12 15q1.025 0 1.85.45.825.45 1.375 1.2.1.15.275.25.175.1.35.1.45 0 .663-.4.212-.4-.088-.85-.65-.975-1.825-1.613-1.175-.637-2.6-.637t-2.6.637q-1.175.638-1.85 1.663-.275.425-.062.813.212.387.637.387Z"/>
    </Icon>
  );
});

IconMaterialSentimentDissatisfied.displayName = 'AmauiIconMaterialSentimentDissatisfied';

export default IconMaterialSentimentDissatisfied;
