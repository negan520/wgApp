<ScrollableTabView
                                    prerenderingSiblingsNumber={0}  page={this.state.tabIndex} onChangeTab={(item)=>this.changgeTab(item.i)} renderTabBar={() => <View style={{flex:1,flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'#123079',borderStyle:'solid',height:74}}>
                    {
                        this.state.tabNav.map((station,index)=>(
                            <TouchableOpacity onPress={() => this.changgeTab(index)} style={{flex:1,height:74,alignItems:'center',justifyContent:'center'}}>
                                {
                                    this.state.tabIndex==index?(
                                        <ImageBackground style={{flex:1,alignItems:'center',height:74,width:'100%',justifyContent:'center'}} source={require('../images/game_nav_active.png')}>
                                            <Image style={{height:38,width:38}} source={station.active}/>
                                            <Text style={{color:'#fff',marginTop:5}}>{station.name}</Text>
                                        </ImageBackground>
                                    ):(<View style={{flex:1,alignItems:'center',height:74,width:'100%',justifyContent:'center'}}>
                                        <Image style={{height:38,width:38}} source={station.img}/>
                                        <Text style={{color:'#fff',marginTop:5}}>{station.name}</Text>
                                    </View>)
                                }
                            </TouchableOpacity>
                        ))
                    }
                </View>}>
                    <View ref='card' tabLabel="card" style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                        {
                            this.state.gameChild.map((station, index) => (
                                <View style={{
                                    width: '25%',
                                    height: 89,
                                    marginTop: 20,
                                    paddingLeft:5,
                                    paddingRight:5,
                                    paddingBottom:10
                                }}>
                                    <View key={index} style={{backgroundColor:'#162a5b',borderRadius:5,paddingBottom:10,alignItems:'center'}}>
                                        <ImageView style={{width:69, height: 69,textAlign:'center'}} source={{uri: domain + '/assets/images/game/' + station[0].GameId + '.png'}} placeholderSource={require('../images/loading_small.png')}/>
                                        <Text numberOfLines={1} style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
                                            {station[1]}
                                        </Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    <View ref='casino' tabLabel="casino"  style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                        {
                            (this.state.tabIndex == 1) ? this.state.gameList[1].child.map((station, index) => (
                                <View key={station.Id} style={{
                                    width: '50%',
                                    height: 120,
                                    marginTop: 10,
                                    paddingLeft: 5,
                                    paddingRight: 5
                                }}>
                                    <Image
                                        style={{width: '100%', height: 120}}
                                        source={{uri: domain + '/assets/images/game' + station.Id + '.png'}}
                                    />
                                </View>
                            )) :null
                        }
                    </View>
                    <View ref='lottery' tabLabel="lottery" style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                        {
                            (this.state.tabIndex == 2)?this.state.lotteryList.map((station, index) => (
                                <View style={{
                                    width: '25%',
                                    height: 89,
                                    marginTop: 20,
                                    paddingLeft:5,
                                    paddingRight:5,
                                    paddingBottom:10
                                }}>
                                    <View key={index} style={{backgroundColor:'#162a5b',borderRadius:5,paddingBottom:10,alignItems:'center'}}>
                                        <ImageView style={{width:69, height: 69}} source={{uri: domain + '/assets/images/game/' + station[0].GameId + '.png'}} placeholderSource={require('../images/loading_small.png')}/>
                                        <Text numberOfLines={1} style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
                                            {station[1]}
                                        </Text>
                                    </View>
                                </View>
                            )):null
                        }
                    </View>
                    <View ref='game' tabLabel="game" style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#101d3d'}}>
                        {
                            (this.state.tabIndex == 3) ? this.state.gameList[3].child.map((station, index) => (
                                <View key={station.Id} style={{
                                    width: '50%',
                                    height: 120,
                                    marginTop: 10,
                                    paddingLeft: 5,
                                    paddingRight: 5
                                }}>
                                    <Image
                                        style={{width: '100%', height: 120}}
                                        source={{uri: domain + '/assets/images/game' + station.Id + '.png'}}
                                    />
                                </View>
                            )) :null
                        }
                    </View>
                    <View ref='fish' tabLabel="fish" style={{flex: 1,backgroundColor: '#101d3d'}}>
                        {
                            (this.state.tabIndex ==4) ? this.state.gameList[4].child.map((station, index) => (
                                <View key={station.Id} style={{
                                    width:'100%',
                                    height: 123,
                                    marginTop: 10,
                                    paddingLeft: 5,
                                    paddingRight: 5
                                }}>
                                    <Image
                                        style={{width: '100%', height: 120}}
                                        source={{uri: domain + '/assets/Default/game' + station.Id + '.png'}}
                                    />
                                </View>
                            )) :null
                        }
                        <View style={{
                            width:'100%',
                            height: 123,
                            marginTop: 10,
                            paddingLeft: 5,
                            paddingRight: 5
                        }}>
                            <Image
                                style={{width: '100%', height: 120}}
                                source={{uri:'http://m.yc02.com/assets/Default/gameFishjqqd.png'}}
                            />
                        </View>
                    </View>
                    <View ref='sport' tabLabel="sport"  style={{flex: 1,backgroundColor: '#101d3d'}}>
                        {
                            (this.state.tabIndex ==5) ? this.state.gameList[5].child.map((station, index) => (
                                <View key={station.Id} style={{
                                    width:'100%',
                                    height: 123,
                                    marginTop: 10,
                                    paddingLeft: 5,
                                    paddingRight: 5
                                }}>
                                    <Image
                                        style={{width: '100%', height: 120}}
                                        source={{uri: domain + '/assets/Default/game' + station.Id + '.png'}}
                                    />
                                </View>
                            )) :null
                        }
                    </View>
                </ScrollableTabView>