import React from 'react';
import {HistoryCardContent, HistoryCardTitle} from './index';
import {HistoryCardWrapper} from './styles';
import {Divider} from '../../../components';

export function HistoryCard({
  title,
  pressedItem,
  onPressItem,
  icon,
  historyData,
}) {
  return (
    <HistoryCardWrapper>
      <HistoryCardTitle
        onPressItem={onPressItem}
        pressedItem={pressedItem}
        title={title}
        icon={icon}
      />
      {pressedItem && (
        <>
          <Divider />
          <HistoryCardContent historyData={historyData} />
        </>
      )}
    </HistoryCardWrapper>
  );
}
